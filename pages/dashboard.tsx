import type {NextPage} from "next/types";
import Head from "next/head";
import Image from "next/image";
// import {useRouter} from "next/router";
import {Button, CircularProgress, Input} from "@mui/material";
import {useState, useEffect} from "react";
import {getFunctions, httpsCallable} from "firebase/functions";

import {Option, None, Some} from "@sniptt/monads";

const Dashboard: NextPage = () => {
//   const {push} = useRouter();

  const maxRetries = 20;
  const [fiveWords, setFiveWords] = useState<string>("");
  const [vibe, setVibe] = useState<string>("");
  // const [userPhotos, setUserPhotos] = useState<string>("");
  const [generating, isGenerating] = useState<boolean>(false);
  const [retry, setRetry] = useState(0);
  const [retryCount, setRetryCount] = useState(maxRetries);

  const [avatar, setAvatar] = useState<Option<string>>(None);

  useEffect(() => {
    const runRetry = async () => {
      if (retryCount === 0) {
        console.log(`Model still loading after ${maxRetries} retries`);
        console.log("Try again in 5 minutes");
        setRetryCount(maxRetries);
        return;
      }

      console.log(`Trying again in ${retry} seconds.`);

      await sleep(retry * 1000);

      await generateBranding();
    };

    if (retry === 0) {
      return;
    }

    runRetry();
  }, [retry]);

  const generateBranding = async () => {
    isGenerating(true);

    // const uuid = generateAvatar();
    const result = "success";
    // if (result === "waiting") {
    //   const {estimatedTime} = imageResp.data as {estimatedTime: number};
    //   setRetry(estimatedTime);
    //   isGenerating(false);
    //   return;
    // }
    // if (result === "success") {
    //   const {image: imageData} = imageResp.data as {image: string};
    //   const image = Some(imageData);
    //   setAvatar(image);
    //   isGenerating(false);
    // //   await push("/results");
    // }
  };

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <>
      <Head>
        <title>Bob from Tapped | Dashboard</title>
      </Head>
      {/* <button
                className=""
            >
                Connect Spotify
            </button> */}
      <div
        className="flex flex-col items-center bg-white pr-12 pl-12"
      >
        <div className="pt-12"></div>
        <p>What's the vibe you're going for?</p>
        <div className="pt-6"></div>
        <div className="relative h-10 w-full min-w-[200px]">
          <Input
            className="peer
            h-full
            w-full
            rounded-[7px]
            border
            border-blue-gray-200
            border-t-transparent
            bg-transparent
            px-3
            py-2.5
            font-sans
            text-sm
            font-normal
            text-blue-gray-700
            outline
            outline-0
            transition-all
            placeholder-shown:border
            placeholder-shown:border-blue-gray-200
            placeholder-shown:border-t-blue-gray-200
            focus:border-2
            focus:border-pink-500
            focus:border-t-transparent
            focus:outline-0
            disabled:border-0
            disabled:bg-blue-gray-50"
            placeholder=" "
            value={vibe}
            onChange={(e) => setVibe(e.target.value)}
          />
          <label className="
            before:content[' ']
            after:content[' ']
            pointer-events-none
            absolute
            left-0
            -top-1.5
            flex
            h-full
            w-full
            select-none
            text-[11px]
            font-normal
            leading-tight
            text-blue-gray-400
            transition-all
            before:pointer-events-none
            before:mt-[6.5px]
            before:mr-1
            before:box-border
            before:block
            before:h-1.5
            before:w-2.5
            before:rounded-tl-md
            before:border-t
            before:border-l
            before:border-blue-gray-200
            before:transition-all
            after:pointer-events-none
            after:mt-[6.5px]
            after:ml-1
            after:box-border
            after:block
            after:h-1.5
            after:w-2.5
            after:flex-grow
            after:rounded-tr-md
            after:border-t
            after:border-r
            after:border-blue-gray-200
            after:transition-all
            peer-placeholder-shown:text-sm
            peer-placeholder-shown:leading-[3.75]
            peer-placeholder-shown:text-blue-gray-500
            peer-placeholder-shown:before:border-transparent
            peer-placeholder-shown:after:border-transparent
            peer-focus:text-[11px]
            peer-focus:leading-tight
            peer-focus:text-pink-500
            peer-focus:before:border-t-2
            peer-focus:before:border-l-2
            peer-focus:before:border-pink-500
            peer-focus:after:border-t-2
            peer-focus:after:border-r-2
            peer-focus:after:border-pink-500
            peer-disabled:text-transparent
            peer-disabled:before:border-transparent
            peer-disabled:after:border-transparent
            peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Outlined
          </label>
        </div>
        <div className="pt-12"></div>
        <p>Describe your music in 5 words</p>
        <div className="pt-6"></div>
        <div className="relative h-10 w-full min-w-[200px]">
          <Input
            className="peer
            h-full
            w-full
            rounded-[7px]
            border
            border-blue-gray-200
            border-t-transparent
            bg-transparent
            px-3
            py-2.5
            font-sans
            text-sm
            font-normal
            text-blue-gray-700
            outline
            outline-0
            transition-all
            placeholder-shown:border
            placeholder-shown:border-blue-gray-200
            placeholder-shown:border-t-blue-gray-200
            focus:border-2
            focus:border-pink-500
            focus:border-t-transparent
            focus:outline-0
            disabled:border-0
            disabled:bg-blue-gray-50"
            placeholder=" "
            value={fiveWords}
            onChange={(e) => setFiveWords(e.target.value)}
          />
          <label className="
            before:content[' ']
            after:content[' ']
            pointer-events-none
            absolute
            left-0
            -top-1.5
            flex
            h-full
            w-full
            select-none
            text-[11px]
            font-normal
            leading-tight
            text-blue-gray-400
            transition-all
            before:pointer-events-none
            before:mt-[6.5px]
            before:mr-1
            before:box-border
            before:block
            before:h-1.5
            before:w-2.5
            before:rounded-tl-md
            before:border-t
            before:border-l
            before:border-blue-gray-200
            before:transition-all
            after:pointer-events-none
            after:mt-[6.5px]
            after:ml-1
            after:box-border
            after:block
            after:h-1.5
            after:w-2.5
            after:flex-grow
            after:rounded-tr-md
            after:border-t
            after:border-r
            after:border-blue-gray-200
            after:transition-all
            peer-placeholder-shown:text-sm
            peer-placeholder-shown:leading-[3.75]
            peer-placeholder-shown:text-blue-gray-500
            peer-placeholder-shown:before:border-transparent
            peer-placeholder-shown:after:border-transparent
            peer-focus:text-[11px]
            peer-focus:leading-tight
            peer-focus:text-pink-500
            peer-focus:before:border-t-2
            peer-focus:before:border-l-2
            peer-focus:before:border-pink-500
            peer-focus:after:border-t-2
            peer-focus:after:border-r-2
            peer-focus:after:border-pink-500
            peer-disabled:text-transparent
            peer-disabled:before:border-transparent
            peer-disabled:after:border-transparent
            peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Outlined
          </label>
        </div>
        <div className="pt-12"></div>
        <p
          className="">
                    Upload a few photos of yourself
        </p>
        <div className="pt-12"></div>
        {generating ? (
          <CircularProgress />
        ) : (
          <Button
            onClick={generateBranding}
            color="primary">
            Submit
          </Button>
        )}
        <div className="pt-12"></div>
        {avatar.isSome() && (
          <div className="output-content">
            <Image
              src={avatar.unwrap()}
              width={512}
              height={512}
              alt={"johannes input"}
            />
            {/* <p>{finalPrompt}</p> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
