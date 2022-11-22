import React from "react";

type MarkupParams = {
    title: string;
    scriptSrc: string;
    component: React.ReactNode;
    fontSrc?: string;
}

export const renderMarkupForSSR = ({title, scriptSrc, component, fontSrc}: MarkupParams) => {
    const linkTagWithFont = fontSrc ? `<link rel="stylesheet" href="${fontSrc}" />` : '<></>'
    return (
    '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head>' +
    '<meta charset="utf-8" />' +
    '<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    linkTagWithFont +
    `<title>${title}</title>` +
    `<script src="${scriptSrc}" defer></script>` +
    '</head>' +
    '<body>' +
    `<main id="root">${component}</main>` +
    '</body>' +
    '</html>'
)}