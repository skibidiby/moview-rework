interface Props {
  text: string;
  trailer: boolean;
  videoSrc: string;
}
export default function Modal(props: Props) {
  const { text, trailer, videoSrc } = props;
  return (
    <div className="w-full h-full bg-black top-0 absolute">
      {trailer ? (
        <div className="min-w-[90vw] min-h-[70vh] flex flex-col items-center gap-2 -translate-y-1/2 p-6 bg-black rounded-lg top-1/2 left-1/2 -translate-x-1/2 absolute border-white border-2">
          <div className="">
            <iframe
              title="trailer"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '80%',
              }}
              src={`https://www.youtube.com/embed/${videoSrc}?autoplay=1`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
            />
          </div>
          <div className="mt-auto text-white text-xl text-center  w-full h-10 rounded shadow border  outline outline-offset-2 outline-2 outline-blue-400">
            <p className="inline-block align-middle">Close</p>
          </div>
        </div>
      ) : (
        <div className="sm:w-[385px] sm:min-w-[40vw] min-w-[80vw] min-h-[50vh] flex flex-col items-center gap-2 -translate-y-1/2 p-6 bg-black rounded-lg top-1/2 left-1/2 -translate-x-1/2 absolute border-white border-2">
          <p className="text-white text-lg text-justify">{text}</p>
          <div className="mt-auto text-white text-xl text-center  w-full h-10 rounded shadow border  outline outline-offset-2 outline-2 outline-blue-400">
            <p className="inline-block align-middle">Close</p>
          </div>
        </div>
      )}
    </div>
  );
}
