import type { NextPage } from "next";
import { useState } from "react";
import Seo from "../components/Seo";
import { useAddPrefix } from "../hooks/useAddPrefix";

const Home: NextPage = () => {
  const [prefix, setPrefix] = useState("");
  const [inputHtml, setInputHtml] = useState("");
  const { parseHtml, parsedHtml } = useAddPrefix();

  const onChangePrefix = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPrefix(e.target.value);
  };
  const onChangeInputHtml = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setInputHtml(e.target.value);
  };
  const onClickParse = (): void => {
    parseHtml(inputHtml, prefix);
  };

  const copyTextToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      function () {
        alert("clipboardにコピーしました");
      },
      function (err) {
        alert(err);
      }
    );
  };

  return (
    <>
      <Seo
        pageTitle="TOP"
        pageDescription="TailwindCSSのPrefixを各クラス名の先頭に付与します。"
        pageImg="https://twc-prefix-parser.vercel.app/ogp.png"
        pageImgWidth={1280}
        pageImgHeight={640}
      />
      <section className="text-gray-600 body-font">
        <div className="container flex flex-wrap px-5 py-8 mx-auto items-center">
          <div className="h-screen md:w-1/2 md:pr-12 md:border-r md:border-b-0 mb-10 md:mb-0 border-b border-gray-200">
            <h1 className="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">
              Input Field
            </h1>
            <p className="leading-relaxed text-base mb-2">
              TailwindCSSを使用したテンプレートやComponentをそのまま貼り付けて下さい。
              <br />
              Prefixを各クラス名に付与します。
            </p>
            <p>
              Ex.Input :{" "}
              <span>
                {
                  '<a className="text-gray-600 hover:text-gray-800">First Link</a>'
                }
              </span>
            </p>
            <p>
              Ex.Prefix : <span className="text-red-500">tw-</span>
            </p>
            <p className="mb-4">
              Ex.Output : <span>{'<a className="'}</span>
              <span className="text-red-500">{"tw-"}</span>
              <span>{"text-gray-600 hover:"}</span>
              <span className="text-red-500">{"tw-"}</span>
              <span>{'text-gray-800">First Link</a>'}</span>
            </p>
            <input
              type="text"
              className="border border-black w-full p-1 mb-4"
              placeholder="Prefix"
              onChange={onChangePrefix}
              value={prefix}
            />
            <textarea
              className="h-1/2 border border-black w-full p-1 mb-4"
              placeholder="HTMLを貼り付けて下さい。"
              onChange={onChangeInputHtml}
              value={inputHtml}
            ></textarea>
            <button
              className="block w-full font-medium text-gray-600 bg-gray-100 py-4 rounded-md mt-4 hover:hover:bg-blue-400 hover:text-white"
              onClick={onClickParse}
            >
              変換する
            </button>
          </div>

          <div className="h-screen flex flex-col md:w-1/2 md:pl-12 w-full">
            <h2 className="sm:text-3xl text-2xl text-center title-font font-semibold text-gray-800 tracking-wider mb-4">
              Result
            </h2>
            <button
              onClick={() => copyTextToClipboard(parsedHtml)}
              className="py-2 font-medium mb-4 text-gray-600 capitalize transition-colors duration-200 transform bg-gray-100 rounded-md hover:bg-blue-400 hover:text-white focus:outline-none focus:ring"
            >
              Copy
            </button>
            <textarea
              className="h-full border border-black p-1"
              placeholder="ここに結果が入ります。"
              value={parsedHtml}
              readOnly
            ></textarea>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
