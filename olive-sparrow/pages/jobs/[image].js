import { sanityClient, SanityClient, urlFor, usePreviewSubscription} from "../../lib/sanity";
import styles from "../../styles/Home.module.css";

const jobsQuery = `*[_type == "job" && image.current == $image]{
    _id,name,bio
  }`;

export default function OneJob({data}){
    const { job } = data;
    
    return(
        <article className={styles.main}>
            <h1>
                {job.bio}
            </h1>
            <div>
                <ul>
                    <li></li>
                </ul>
                <h3> description here </h3>
            </div>
        </article>
    )

}

export async function getStaticPaths(){
    const paths = await sanityClient.fetch(
        `*[_type == "job" && defined(image.current)]{
            "params": {
                "image": image.current
            }
        }`
    );

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({params}){
    const{image} = params;
    const job = await sanityClient.fetch(jobsQuery,{image})
    return { props: {data: { job }}};
}