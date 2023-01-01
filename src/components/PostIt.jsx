import{ Post, Wrapper} from "./PostItStyle.jsx";

export function PostIt(){
    return(
        <Wrapper>
            <Post>
                <p>oi eu falo</p>
                <time title="01/01/2023" >01/01/2023</time>
            </Post>
        </Wrapper>

    );
}