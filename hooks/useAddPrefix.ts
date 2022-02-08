import { useCallback, useState } from "react";
import { tailwindClassNameList } from "../data";

export const useAddPrefix = () => {
  const [parsedHtml, setParsedHtml] = useState("");

  const parseHtml = useCallback((html: string, prefix: string) => {
    tailwindClassNameList.forEach((className) => {
      let reg = `( |"|'|:)(${className})(.)`;

      html = html.replace(new RegExp(reg, "g"), `$1${prefix}$2$3`);
    });
    setParsedHtml(html);
  }, []);

  return { parseHtml, parsedHtml };
};
