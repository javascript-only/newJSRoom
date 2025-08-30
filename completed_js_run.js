const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rootDir = __dirname;
// 콘솔입력 대기
function ask(question) {
  // 입력 받기
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) =>
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    })
  );
}

// 루트 폴더 가져오기
function getFolders(dir, basePath = "") {
  return fs
    .readdirSync(dir)
    .filter((f) => fs.lstatSync(path.join(dir, f)).isDirectory())
    .filter((f) => !["node_modules", ".git"].includes(f));
}

// 폴더 안 JS 파일 탐색
function getJsFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter(
      (f) => fs.statSync(path.join(dir, f)).isFile() && f.endsWith(".js")
    );
}

async function run() {
  const rootFolders = getFolders(rootDir);

  console.log("\n📂 JS가 담긴 폴더를 선택해주세요");
  rootFolders.forEach((f, i) => console.log(`${i + 1}. ${f}`));
  const rootIndex = await ask("\n 폴더 번호 입력 ▶️ ");
  const selectedRoot = rootFolders[parseInt(rootIndex) - 1];

  if (!selectedRoot) return console.log(`☢️ 잘못된 번호를 선택하셨습니다.`);

  const subFoldersPath = path.join(rootDir, selectedRoot);
  const subFolders = getFolders(subFoldersPath);

  console.log(`\n📂 ${selectedRoot} 폴더 안 하위 폴더:`);
  subFolders.forEach((f, i) => console.log(`${i + 1}. ${f}`));
  const subIndex = await ask("\n폴더 번호 입력 ▶️ ");
  const selectedSub = subFolders[parseInt(subIndex) - 1];

  if (!selectedSub) return console.log("☢️ 잘못된 번호를 선택하셨습니다.");

  const filesPath = path.join(subFoldersPath, selectedSub);
  const jsFiles = getJsFiles(filesPath);

  if (jsFiles.length === 0) return console.log("❌ JS 파일이 없습니다");

  console.log(`\n📂 ${selectedSub} 안 JS 파일:`);
  jsFiles.forEach((f, i) => console.log(`${i + 1}. ${f}`));

  const fileIndex = await ask("\n실행할 파일 번호를 입력해주세요");
  const filePath = path.join(filesPath, jsFiles[parseInt(fileIndex) - 1]);

  if (!filePath) return console.log("☢️ 잘못된 번호를 입력하셨습니다!");

  console.log(`\n 🚀 실행 중: ${path.relative(rootDir, filePath)}`);
  require(filePath);
}

run();
