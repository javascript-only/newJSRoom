const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.set("view engine", "ejs");

// 데이터 파일 경로
const postsFilePath = path.join(__dirname, "data", "post_view.json");

// 데이터 읽기 함수
const loadPosts = () => {
  try {
    const data = fs.readFileSync(postsFilePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// 데이터 저장 함수
const savePosts = (posts) => {
  fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2));
};

// 홈 페이지 (강의 목록)
app.get("/", (req, res) => {
  const posts = loadPosts();
  res.render("index", { posts });
});

// 새 강의 추가 폼
app.get("/new", (req, res) => {
  res.render("new");
});

// 새 강의 저장
app.post("/new", (req, res) => {
  const { title, description, code } = req.body;
  const posts = loadPosts();
  posts.push({ title, description, code, date: new Date() });
  savePosts(posts);
  res.redirect("/");
});

// 포스트 읽기
app.get("/post/:id", (req, res) => {
  const posts = loadPosts();
  const id = parseInt(req.params.id, 10);
  if (id < 0 || id >= posts.length) {
    return res.status(404).send("글을 찾을 수 없습니다");
  }
  const post = posts[id];
  res.render("post", { post });
});

// 코드 실행 API
app.post("/run", (req, res) => {
  try {
    const { code } = req.body;
    let output = [];

    const sandbox = {
      console: {
        log: (...args) => output.push(args.join(" ")),
      },
    };
    const context = vm.createContext(sandbox);

    vm.runInContext(code, context);

    res.json({ result: output.join("\n") || "실행 완료" });
  } catch (err) {
    res.json({ result: "오류: " + err.message });
  }
});

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
