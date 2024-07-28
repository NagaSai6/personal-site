import React from "react";
import { LaunchIcon } from "@sanity/icons";
export default function ExternalLinkRenderer(props: any) {
  return (
    <span>
      {props.renderDefault(props)}
      <a contentEditable={false} href={props.value.href}>
        <LaunchIcon />
      </a>
    </span>
  );
}
