import VideoPlayer from "@khaouitiabdelhakim/react-video-player";

export default function Portfolio() {
  return (
    <div className="padding-30 mt-[130px] min-h-[calc(100vh-130px)] container">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="font-bold text-[40px] w-[500px]">
          Why Enver Is The Best Choice?
        </h1>
        <p className="w-[600px] text-[#ffffff]/40 leading-7">
          Watch this one minute video so you understand why you should use our
          services!
        </p>
      </div>

      <div>
        <VideoPlayer
          src="/path/to/video.mp4"
          poster="/path/to/poster.jpg"
          controls={true}
          className="rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}
