import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Interested in reading more artistic stories or blogs?</h2>
        <p className="text-gray-500 my-2">Checkout Below</p>
        <Button gradientDuoTone="purpleToPink" className="rounded-tl-xl rounded-bl-none">
          <a href="/search" target="_blank" rel="noopener noreferrer">
            Begin your reading journey.
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://cdn.iview.abc.net.au/thumbs/i/X0_65fcb1bd0c9d3_3600.jpg" />
      </div>
    </div>
  );
}
