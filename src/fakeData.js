export const FAKE_APPLICANTS = {
  hong: {
    id: 'hong',
    name: '홍길동',
    pas: {
      talent: {
        labels: ['전문성', '경험', '기타', '학력', '코딩', '열정'],
        datasets: [
          { label: '핵심인재', data: [10, 8, 7, 9, 7, 8], backgroundColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgba(255, 99, 132, 1)', borderWidth: 1 },
          { label: '지원자', data: [8, 8, 8, 10, 8, 8], backgroundColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgba(54, 162, 235, 1)', borderWidth: 1 },
        ],
      },
      jobFit: {
        labels: ['혁신', '책임', '존중', '협업', '성장'],
        datasets: [
          { label: '지원자 평균', data: [4, 3, 3, 3, 4], backgroundColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgba(255, 99, 132, 1)', borderWidth: 1 },
          { label: '지원자', data: [3.5, 3.3, 2.2, 2.4, 4.5], backgroundColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgba(54, 162, 235, 1)', borderWidth: 1 },
        ],
      },
    },
    jobFitCard: {
      ai: 90,
      digital: 70,
      dx: 60,
      cloud: 50,
    },
    acd: {
      percentage: 42,
      coverLetter: "저는 AI 기술의 심오한 잠재력을 탐구하며 인류 사회에 실질적으로 기여하고자 하는 열정적인 개발자 지망생입니다. 대한민국 IT 서비스의 패러다임을 선도하는 LG CNS는 저의 기술적 포부와 성장 갈망을 실현할 수 있는 최적의 환경이라고 확신합니다. 특히, 귀사가 자체적으로 개발 및 운영 중인 AI 기반 데이터 분석 플랫폼과 클라우드 네이티브 솔루션은 4차 산업혁명 시대의 핵심 동력으로서, 다양한 산업 도메인에서 전례 없는 혁신을 창출하고 있습니다. <span class='highlight'>이러한 고도화된 기술 생태계 속에서 고객에게 차별화된 가치를 제공하고, 복잡다단한 비즈니스 난제를 해결하는 데 기여하는 전문가로 성장하고 싶습니다.</span>\n\n학부 과정 동안 '고급 알고리즘', '데이터 구조', '머신러닝 심화' 등의 과목을 통해 AI의 이론적 토대를 견고히 다졌습니다. 여기에 그치지 않고, 'BERT 기반의 문맥 분석을 통한 가짜 뉴스 탐지 시스템' 프로젝트를 수행하며 실무적인 데이터 처리 및 모델링 역량을 배양했습니다. <span class='highlight'>해당 프로젝트는 대규모 텍스트 데이터의 수집, 정제, 전처리부터 시작하여, 최신 자연어 처리 모델의 파인튜닝 및 성능 최적화에 이르는 엔드-투-엔드 파이프라인을 직접 설계하고 구현하는 소중한 경험이었습니다.</span> <span class='highlight'>이 과정을 통해 복잡한 문제 상황을 논리적으로 분석하고, 효율적인 해결책을 도출하는 문제 해결 능력을 체계적으로 함양할 수 있었습니다.</span>\n\n<span class='highlight'>저는 이러한 기술적 깊이와 실무 경험을 바탕으로 LG CNS의 AI 기반 사업 영역에서 즉각적인 시너지를 창출할 수 있다고 자신합니다.</span> 빠르게 변화하는 기술 트렌드를 주도적으로 학습하고 동료들과의 긴밀한 협업을 통해 함께 성장하며, 귀사의 비즈니스 성공에 핵심적인 역할을 수행하는 인재가 되겠습니다.",
      suspectedSentences: [
        "이러한 고도화된 기술 생태계 속에서 고객에게 차별화된 가치를 제공하고, 복잡다단한 비즈니스 난제를 해결하는 데 기여하는 전문가로 성장하고 싶습니다.",
        "해당 프로젝트는 대규모 텍스트 데이터의 수집, 정제, 전처리부터 시작하여, 최신 자연어 처리 모델의 파인튜닝 및 성능 최적화에 이르는 엔드-투-엔드 파이프라인을 직접 설계하고 구현하는 소중한 경험이었습니다.",
        "이 과정을 통해 복잡한 문제 상황을 논리적으로 분석하고, 효율적인 해결책을 도출하는 문제 해결 능력을 체계적으로 함양할 수 있었습니다.",
        "저는 이러한 기술적 깊이와 실무 경험을 바탕으로 LG CNS의 AI 기반 사업 영역에서 즉각적인 시너지를 창출할 수 있다고 자신합니다."
      ],
    },
    coreTalent: {
      type: '데이터 분석 전문가',
      rationale: ["프로젝트 경험 내 '데이터 마이닝' 키워드 포함", "코딩 테스트에서 '알고리즘' 역량 우수"],
    }
  },
  kim: {
    id: 'kim',
    name: '김철수',
    pas: {
      talent: {
        labels: ['전문성', '경험', '기타', '학력', '코딩', '열정'],
        datasets: [
          { label: '핵심인재', data: [10, 8, 7, 9, 7, 8], backgroundColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgba(255, 99, 132, 1)', borderWidth: 1 },
          { label: '지원자', data: [9, 7, 8, 8, 9, 7], backgroundColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgba(54, 162, 235, 1)', borderWidth: 1 },
        ],
      },
      jobFit: {
        labels: ['혁신', '책임', '존중', '협업', '성장'],
        datasets: [
          { label: '지원자 평균', data: [4, 3, 3, 3, 4], backgroundColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgba(255, 99, 132, 1)', borderWidth: 1 },
          { label: '지원자', data: [4.1, 2.8, 3.5, 3.0, 4.1], backgroundColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgba(54, 162, 235, 1)', borderWidth: 1 },
        ],
      },
    },
    jobFitCard: {
      ai: 85,
      digital: 75,
      dx: 65,
      cloud: 55,
    },
    acd: {
      percentage: 15,
      coverLetter: "클라우드 네이티브 환경에서의 개발 경험을 통해 얻은 저의 기술적 통찰력은 LG CNS의 비즈니스 혁신에 기여할 수 있는 강력한 자산입니다. <span class='highlight'>저는 단순히 코드를 작성하는 개발자를 넘어, 비즈니스 가치를 이해하고 기술을 통해 문제를 해결하는 솔루션 아키텍트가 되고자 합니다.</span>\n\nAWS와 Azure 환경에서 컨테이너 오케스트레이션 도구인 Kubernetes를 활용하여 마이크로서비스 아키텍처(MSA) 기반의 애플리케이션을 구축하고 운영한 경험이 있습니다. CI/CD 파이프라인 자동화, Terraform을 이용한 IaC(Infrastructure as Code) 구현 등 클라우드 환경의 생산성과 안정성을 높이는 다양한 실무 경험을 쌓았습니다.",
      suspectedSentences: [
        "저는 단순히 코드를 작성하는 개발자를 넘어, 비즈니스 가치를 이해하고 기술을 통해 문제를 해결하는 솔루션 아키텍트가 되고자 합니다."
      ],
    },
    coreTalent: {
      type: '클라우드 아키텍트',
      rationale: ["자기소개서 내 'AWS', 'Azure' 키워드 언급", "관련 자격증 보유"],
    }
  },
  lee: {
    id: 'lee',
    name: '이영희',
    pas: {
      talent: {
        labels: ['전문성', '경험', '기타', '학력', '코딩', '열정'],
        datasets: [
          { label: '핵심인재', data: [10, 8, 7, 9, 7, 8], backgroundColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgba(255, 99, 132, 1)', borderWidth: 1 },
          { label: '지원자', data: [7, 9, 9, 7, 8, 9], backgroundColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgba(54, 162, 235, 1)', borderWidth: 1 },
        ],
      },
      jobFit: {
        labels: ['혁신', '책임', '존중', '협업', '성장'],
        datasets: [
          { label: '지원자 평균', data: [4, 3, 3, 3, 4], backgroundColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgba(255, 99, 132, 1)', borderWidth: 1 },
          { label: '지원자', data: [3.0, 4.0, 4.0, 3.8, 3.5], backgroundColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgba(54, 162, 235, 1)', borderWidth: 1 },
        ],
      },
    },
    jobFitCard: {
      ai: 70,
      digital: 80,
      dx: 85,
      cloud: 75,
    },
    acd: {
      percentage: 88,
      coverLetter: "사용자 경험(UX)에 대한 깊은 이해와 데이터 기반의 디자인 개선 역량은 저의 가장 큰 강점입니다. <span class='highlight'>저는 사용자의 목소리에 귀 기울이고, 그들의 숨겨진 니즈를 발견하여 직관적이고 만족도 높은 디지털 프로덕트를 만드는 과정에서 큰 보람을 느낍니다.</span>\n\nFigma, Sketch 등의 프로토타이핑 툴에 능숙하며, A/B 테스팅, 사용성 테스트 등 정량적, 정성적 데이터를 통합하여 디자인 의사결정을 내리는 데 익숙합니다. <span class='highlight'>특히 '스마트홈 앱 사용성 개선' 프로젝트에서는 사용자 리서치를 통해 주요 문제점을 도출하고, 정보 구조를 재설계하여 이탈률을 20% 감소시킨 경험이 있습니다.</span> <span class='highlight'>성공적인 UX는 비즈니스의 성공과 직결된다는 신념을 가지고 있습니다.</span>",
      suspectedSentences: [
        "저는 사용자의 목소리에 귀 기울이고, 그들의 숨겨진 니즈를 발견하여 직관적이고 만족도 높은 디지털 프로덕트를 만드는 과정에서 큰 보람을 느낍니다.",
        "특히 '스마트홈 앱 사용성 개선' 프로젝트에서는 사용자 리서치를 통해 주요 문제점을 도출하고, 정보 구조를 재설계하여 이탈률을 20% 감소시킨 경험이 있습니다.",
        "성공적인 UX는 비즈니스의 성공과 직결된다는 신념을 가지고 있습니다."
      ],
    },
    coreTalent: {
      type: 'UI/UX 스페셜리스트',
      rationale: ["'HCI' 관련 수강 및 프로젝트 경험", "포트폴리오에서 사용자 리서치 역량 확인"],
    }
  },
}; 