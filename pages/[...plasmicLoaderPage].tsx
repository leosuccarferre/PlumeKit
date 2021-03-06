/** This file is auto-generated by Plasmic; please do not edit! */
import { useRouter } from "next/router";
import PlasmicLoader from "@plasmicapp/loader";

const componentsByPath = {
  
    "page": {name: "Testing", projectId: "4k5VUvYN9ByL8a1GrrWDBZ" },
  
    "new": {name: "New2", projectId: "4k5VUvYN9ByL8a1GrrWDBZ" },
  
    "boom": {name: "Boom", projectId: "4k5VUvYN9ByL8a1GrrWDBZ" },
  
};

export default function PlasmicLoaderPage() {
  const router = useRouter();
  let { plasmicLoaderPage } = router.query;
  if (Array.isArray(plasmicLoaderPage)) {
    plasmicLoaderPage = plasmicLoaderPage.join('/');
  }
  const {name, projectId} = componentsByPath[plasmicLoaderPage];

  return <PlasmicLoader component={name} projectId={projectId} />;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      
        { params: { plasmicLoaderPage: ["page",] } },
      
        { params: { plasmicLoaderPage: ["new",] } },
      
        { params: { plasmicLoaderPage: ["boom",] } },
      
    ],
    fallback: false,
  };
}
