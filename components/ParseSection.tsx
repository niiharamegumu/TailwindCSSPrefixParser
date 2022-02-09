import { useState, VFC } from "react";

import { useAddPrefix } from "../hooks/useAddPrefix";

export const ParseSection: VFC = () => {
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
        text.length > 0
          ? alert("clipboardにコピーしました")
          : alert("Resultの中身が空です。");
      },
      function (err) {
        alert(err);
      }
    );
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-wrap px-5 py-8 mx-auto items-center md:h-screen">
        <div className="h-full md:w-1/2 md:pr-12 md:border-r md:mb-4 pb-10 md:pb-0 md:border-b-0 mb-10 border-b border-gray-200">
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
            className="border border-black w-full p-1 mb-4 h-10 md:h-auto"
            placeholder="Prefix"
            onChange={onChangePrefix}
            value={prefix}
          />
          <textarea
            className="border border-black w-full p-1 mb-4 h-96 md:h-1/2"
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

        <div className="h-full flex flex-col md:w-1/2 md:pl-12 w-full">
          <h2 className="sm:text-3xl text-2xl text-center title-font font-semibold text-gray-800 tracking-wider mb-4">
            Result
          </h2>
          <button
            onClick={() => copyTextToClipboard(parsedHtml)}
            className="block w-full font-medium text-gray-600 bg-gray-100 py-4 rounded-md mt-4 mb-4 hover:hover:bg-blue-400 hover:text-white"
          >
            Copy
          </button>
          <textarea
            className="border border-black p-1 h-96 md:h-full"
            placeholder="ここに結果が入ります。"
            value={parsedHtml}
            readOnly
          ></textarea>
        </div>
      </div>
    </section>
  );
};
