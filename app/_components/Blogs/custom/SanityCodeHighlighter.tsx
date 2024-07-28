import React from "react";
import js from "refractor/lang/javascript.js";
import python from "refractor/lang/python";
import css from "refractor/lang/css";
import bash from "refractor/lang/bash";
import json from "refractor/lang/json";
import markdown from "refractor/lang/markdown";
import yaml from "refractor/lang/yaml";
import sql from "refractor/lang/sql";
import typescript from "refractor/lang/typescript";
import jsx from "refractor/lang/jsx";
import tsx from "refractor/lang/tsx";
import handlebars from "refractor/lang/handlebars";
import docker from 'refractor/lang/docker'
import "./styles/twillight.css";
// import "./styles/funky.css";
// import './styles/tomorrow.css'
import { Refractor, registerLanguage } from "react-refractor";

registerLanguage(js);
registerLanguage(python);
registerLanguage(css);
registerLanguage(bash);
registerLanguage(json);
registerLanguage(markdown);
registerLanguage(yaml);
registerLanguage(sql);
registerLanguage(typescript);
registerLanguage(jsx);
registerLanguage(tsx);
registerLanguage(handlebars);
registerLanguage(docker);
// interface SanityCodeHighlighterProps {
//   language: string;
//   code: string;
//   highlightedLines?: number[];
// }

const SanityCodeHighlighter: React.FC<any> = ({ value }) => {
  return (
    <Refractor
      language={value?.language}
      value={value?.code}
      markers={value?.highlightedLines}
    />
  );
};

export default SanityCodeHighlighter;
