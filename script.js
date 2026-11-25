const lessons = [
  {
    number: 2,
    title: "Python과 객체지향 프로그래밍",
    summary: "Python 객체와 내장 자료형, ADT와 클래스의 역할, 상속·다형성·합성을 익힙니다.",
    keywords: ["Python 객체", "ADT", "클래스", "상속·합성"],
    pdf: "DSA_Lecture_Study_Guides_12_PDFs/Lecture_02_Study_Guide.pdf",
  },
  {
    number: 3,
    title: "알고리즘 분석과 Big-O 표기법",
    summary: "실행 시간 측정과 점근 분석을 비교하고 O·Ω·Θ 표기법으로 성장률을 분석합니다.",
    keywords: ["점근 분석", "Big-O", "성장률", "복잡도"],
    pdf: "DSA_Lecture_Study_Guides_12_PDFs/Lecture_03_Study_Guide.pdf",
  },
  {
    number: 4,
    title: "선형 자료구조: 배열과 연결 리스트",
    summary: "리스트 ADT를 바탕으로 배열 리스트와 연결 리스트의 구현·연산·복잡도를 비교합니다.",
    keywords: ["리스트 ADT", "배열", "연결 리스트", "복잡도"],
    pdf: "DSA_Lecture_Study_Guides_12_PDFs/Lecture_04_Study_Guide.pdf",
  },
  {
    number: 5,
    title: "스택과 큐",
    summary: "LIFO·FIFO 원리부터 괄호 검사, 수식 표기와 계산까지 선형 자료구조의 응용을 살펴봅니다.",
    keywords: ["스택", "큐", "덱", "수식 계산"],
    pdf: "DSA_Lecture_Study_Guides_12_PDFs/Lecture_05_Study_Guide.pdf",
  },
  {
    number: 6,
    title: "재귀와 알고리즘 분석",
    summary: "재귀의 종료 조건과 점화식, 반복 대입과 마스터 정리를 활용한 복잡도 분석을 학습합니다.",
    keywords: ["재귀", "점화식", "마스터 정리", "분할 정복"],
    pdf: "DSA_Lecture_Study_Guides_12_PDFs/Lecture_06_Study_Guide.pdf",
  },
  {
    number: 7,
    title: "정렬 알고리즘",
    summary: "기초 정렬과 병합·퀵·힙 정렬의 원리, 최선·평균·최악 복잡도를 비교합니다.",
    keywords: ["병합 정렬", "퀵 정렬", "힙 정렬", "안정성"],
    pdf: "DSA_Lecture_Study_Guides_12_PDFs/Lecture_07_Study_Guide.pdf",
  },
  {
    number: 8,
    title: "트리와 이진 탐색 트리",
    summary: "레코드 색인, BST의 검색·삽입·삭제와 순회, AVL 트리의 균형 회전을 익힙니다.",
    keywords: ["BST", "트리 순회", "AVL", "회전"],
    pdf: "DSA_Lecture_Study_Guides_12_PDFs/Lecture_08_Study_Guide.pdf",
  },
  {
    number: 9,
    title: "고급 트리와 힙",
    summary: "레드-블랙 트리와 B-트리, 우선순위 큐 및 힙의 불변식과 연산을 학습합니다.",
    keywords: ["레드-블랙 트리", "B-트리", "우선순위 큐", "힙"],
    pdf: "DSA_Lecture_Study_Guides_12_PDFs/Lecture_09_Study_Guide.pdf",
  },
  {
    number: 11,
    title: "해시 테이블",
    summary: "해시 함수와 충돌 해결, 적재율에 따른 성능 변화와 MinHash의 원리를 살펴봅니다.",
    keywords: ["해시 함수", "충돌", "개방 주소법", "MinHash"],
    pdf: "DSA_Lecture_Study_Guides_12_PDFs/Lecture_11_Study_Guide.pdf",
  },
  {
    number: 12,
    title: "그래프",
    summary: "그래프의 표현과 BFS·DFS를 익히고, 최소 신장 트리와 위상 정렬을 살펴봅니다.",
    keywords: ["인접 리스트", "BFS", "DFS", "위상 정렬"],
    pdf: "DSA_Lecture_Study_Guides_12_PDFs/Lecture_12_Study_Guide.pdf",
  },
  {
    number: 13,
    title: "최단 경로 알고리즘",
    summary: "다익스트라, 벨먼-포드, 플로이드-워셜의 원리와 적용 조건을 비교합니다.",
    keywords: ["최단 경로", "relaxation", "다익스트라", "벨먼-포드"],
    pdf: "DSA_Lecture_Study_Guides_12_PDFs/Lecture_13_Study_Guide.pdf",
  },
  {
    number: 14,
    title: "동적 계획법",
    summary: "상태와 점화식을 정의하고 계산 순서와 복원 절차를 설계해 최적화 문제를 풉니다.",
    keywords: ["DP", "상태 정의", "점화식", "최적화"],
    pdf: "DSA_Lecture_Study_Guides_12_PDFs/Lecture_14_Study_Guide.pdf",
  },
];

const curriculumTree = [
  {
    label: "기초와 분석",
    children: [
      { lessonNumber: 2 },
      {
        lessonNumber: 3,
        children: [{ lessonNumber: 6 }],
      },
    ],
  },
  {
    label: "자료구조",
    children: [
      {
        label: "선형 자료구조",
        children: [{ lessonNumber: 4 }, { lessonNumber: 5 }],
      },
      {
        label: "트리 기반 구조",
        children: [
          {
            lessonNumber: 8,
            children: [{ lessonNumber: 9 }],
          },
        ],
      },
      { lessonNumber: 11 },
      {
        lessonNumber: 12,
        children: [
          {
            label: "그래프 알고리즘",
            children: [{ lessonNumber: 13 }],
          },
        ],
      },
    ],
  },
  {
    label: "알고리즘 설계",
    children: [{ lessonNumber: 7 }, { lessonNumber: 14 }],
  },
];

function mergeSort(items, compare) {
  if (items.length <= 1) return items.slice();

  const middle = Math.floor(items.length / 2);
  const left = mergeSort(items.slice(0, middle), compare);
  const right = mergeSort(items.slice(middle), compare);
  const merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (compare(left[leftIndex], right[rightIndex]) <= 0) {
      merged.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      merged.push(right[rightIndex]);
      rightIndex += 1;
    }
  }

  return merged.concat(left.slice(leftIndex), right.slice(rightIndex));
}

const lessonGrid = document.querySelector("#lesson-grid");
const lessonCount = document.querySelector("#lesson-count");
const orderButton = document.querySelector("#sort-order");
const titleButton = document.querySelector("#sort-title");
const sortControls = document.querySelector("#sort-controls");
const sortNote = document.querySelector(".sort-note");
const cardViewButton = document.querySelector("#card-view-button");
const treeViewButton = document.querySelector("#tree-view-button");
const curriculumTreeElement = document.querySelector("#curriculum-tree");
const curriculumTreeContent = document.querySelector("#curriculum-tree-content");
let activeSort = "order";
let lastClickedSort = null;
let sortDirection = "asc";

function renderLessons(sortedLessons) {
  lessonGrid.innerHTML = sortedLessons.map((lesson) => `
    <article class="lesson-card">
      <a class="lesson-card-link" href="${lesson.pdf}" target="_blank" rel="noopener" aria-label="${lesson.title} PDF 새 탭에서 열기"></a>
      <div class="lesson-card-content">
        <div class="card-top">
          <span class="lesson-number">LECTURE ${String(lesson.number).padStart(2, "0")}</span>
          <span class="lesson-mark" aria-hidden="true">↗</span>
        </div>
        <h3 class="lesson-title">${lesson.title}</h3>
        <p class="lesson-summary">${lesson.summary}</p>
        <div class="keyword-list" aria-label="핵심 키워드">
          ${lesson.keywords.map((keyword) => `<span class="keyword">${keyword}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

function renderTreeNode(node, lessonByNumber) {
  if (node.lessonNumber !== undefined) {
    const lesson = lessonByNumber.get(node.lessonNumber);
    if (!lesson) throw new Error(`Unknown lesson number in curriculum tree: ${node.lessonNumber}`);

    const children = node.children
      ? `<ul class="tree-children">${node.children.map((child) => renderTreeNode(child, lessonByNumber)).join("")}</ul>`
      : "";

    return `
      <li class="tree-lesson-node">
        <a class="tree-lesson-link" href="${lesson.pdf}" target="_blank" rel="noopener" aria-label="${lesson.title} PDF 새 탭에서 열기">
          <span class="tree-lesson-info">
            <span class="tree-lesson-number">LECTURE ${String(lesson.number).padStart(2, "0")}</span>
            <span class="tree-lesson-title">${lesson.title}</span>
            <span class="tree-lesson-summary">${lesson.summary}</span>
          </span>
          <span class="tree-lesson-arrow" aria-hidden="true">↗</span>
        </a>
        ${children}
      </li>
    `;
  }

  return `
    <li class="tree-branch-node">
      <span class="tree-branch-label">${node.label}</span>
      <ul class="tree-children">${node.children.map((child) => renderTreeNode(child, lessonByNumber)).join("")}</ul>
    </li>
  `;
}

function renderCurriculumTree() {
  const lessonByNumber = new Map(lessons.map((lesson) => [lesson.number, lesson]));
  curriculumTreeContent.innerHTML = `
    <div class="tree-root">자료구조 · 알고리즘</div>
    <ul class="tree-children tree-top-level">
      ${curriculumTree.map((node) => renderTreeNode(node, lessonByNumber)).join("")}
    </ul>
  `;
}

function setCurriculumView(view) {
  const showTree = view === "tree";
  lessonGrid.hidden = showTree;
  curriculumTreeElement.hidden = !showTree;
  sortControls.hidden = showTree;
  sortNote.hidden = showTree;
  cardViewButton.classList.toggle("is-active", !showTree);
  treeViewButton.classList.toggle("is-active", showTree);
  cardViewButton.setAttribute("aria-pressed", String(!showTree));
  treeViewButton.setAttribute("aria-pressed", String(showTree));
}

function updateSortControls() {
  [[orderButton, "order"], [titleButton, "title"]].forEach(([button, sortType]) => {
    const isActive = sortType === activeSort;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
    button.setAttribute(
      "aria-label",
      isActive
        ? `${sortType === "order" ? "강의 순서순" : "제목순"}, 현재 ${sortDirection === "asc" ? "오름차순" : "내림차순"}`
        : `${sortType === "order" ? "강의 순서순" : "제목순"} 정렬`,
    );
  });
  orderButton.querySelector("span").textContent =
    activeSort === "order" && sortDirection === "desc" ? "↓" : "↑";
  titleButton.querySelector("span").textContent =
    activeSort === "title" && sortDirection === "desc" ? "Z–A" : "A–Z";
}

function sortLessons(sortType) {
  if (lastClickedSort === sortType) {
    sortDirection = sortDirection === "asc" ? "desc" : "asc";
  } else {
    sortDirection = "asc";
  }
  activeSort = sortType;
  lastClickedSort = sortType;

  const compare =
    sortType === "order"
      ? (a, b) => a.number - b.number
      : (a, b) => a.title.localeCompare(b.title, "ko");
  const directedCompare =
    sortDirection === "asc" ? compare : (a, b) => compare(b, a);

  renderLessons(mergeSort(lessons, directedCompare));
  updateSortControls();
}

orderButton.addEventListener("click", () => sortLessons("order"));
titleButton.addEventListener("click", () => sortLessons("title"));
cardViewButton.addEventListener("click", () => setCurriculumView("cards"));
treeViewButton.addEventListener("click", () => setCurriculumView("tree"));

lessonCount.textContent = String(lessons.length);
renderLessons(mergeSort(lessons, (a, b) => a.number - b.number));
renderCurriculumTree();
updateSortControls();
