import TabBar from "@/components/layout/tab-bar";

export default function Home() {
  return (
    <div className="flex flex-row items-center justify-center min-h-screen gap-5">
      <div className="hidden md:flex flex-1/2 flex-col my-auto *:font-medium gap-2  items-center min-h-screen w-full bg-blue-500">
        <div className="flex">메인화면 가는 로고</div>
        <div className="flex text-7xl">간단소개</div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col ">
            <div className="flex">내 사진 이미지</div>
            <div>
              <div>학교</div>
              <div>광문고</div>
              <div>국민대</div>
            </div>
          </div>
          <div className="flex flex-col">
            <div>보유 자격증</div>
            <div>자격증 목록</div>
          </div>
          <div className="flex gap-3">
            <div>연락처 이미지</div>
            <div>핸드폰 번호</div>
          </div>
          <div className="flex gap-3">
            <div>이메일 이미지</div>
            <div>j8747j@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="flex flex-1/2 bg-amber-400 w-full min-h-screen my-auto relative">
        <div className="m-auto">앱 화면</div>
        <div className="absolute bottom-0 left-0 w-full">
          <TabBar />
        </div>
      </div>
    </div>
  );
}
