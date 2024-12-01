import React from "react";
//import SEO from "./sPage";
import { graphql } from "gatsby";
const HomePage = ({ data }) => (
    <main>
        <h1>{data.site.siteMetadata.title}</h1>
        <p>{data.site.siteMetadata.description}</p>
        <p>This website is Created Sucessfully</p>
    </main>
);
export const query = graphql`
query {
site {
siteMetadata {
title
description

}
}
}
`;
export default HomePage;