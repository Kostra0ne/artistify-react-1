// custom tools
// import APIHandler from "../api/handler";
import LabPreview from "../components/preview/LabPreview";
// styles
import "../styles/album.css";
import "../styles/comment.css";
import "../styles/star.css";

export default function Album({ match }) {
  return (
    <>
      <h1 className="title diy">D.I.Y (Album)</h1>
      <p>
        Use the image below to code the {`<Album />`} component.
        <br />
        This component import child components: {`<Stars />`} and{" "}
        {`<Comments />`}{" "}
      </p>

      <h1 className="title diy">D.I.Y (Stars)</h1>
      <p>
        The Stars component allow the end-users to rate an artist/album.
        <br />
        The black stars represent the average rate for a given resource.
        <br />
        The yellow stars represent the logged in user rate fro the current
        album.
        <br />
        Bonus: make it modular to rate labels/styles as well.
      </p>

      <hr />

      <h1 className="title diy">D.I.Y (Comments)</h1>
      <p>
        Import a custom {`<Comments />`} allowing the end-users to post comments
        in database related to the current artist.
        <br />
      </p>

      <LabPreview name="album" />
    </>
  );
}
