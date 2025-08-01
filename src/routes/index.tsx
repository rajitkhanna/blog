import { createFileRoute, Link } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="p-2">
      <h1>Me in 10 Seconds</h1>
      <p>I am skibidi</p>
      <Link to="/about">
        <h1>Me in 10 Minutes?</h1>
      </Link>{" "}
      <p>
        See <a href="/about">my about page</a>.
      </p>
      <Link to="/now">
        <h1>What Am I Doing Now?</h1>
      </Link>{" "}
      <p>
        See <a href="/now">my now page</a>.
      </p>
      <Link to="/search">
        <h1>Search this Site</h1>
      </Link>{" "}
      <p>
        Go to <a href="/search">the search page</a> to search for any idea.
      </p>
      <h1>
        Newest Articles <Link to="/blog">See All</Link>
      </h1>
      <h1>
        Popular Articles <Link to="/blog">See All</Link>
      </h1>
      <h1>Projects</h1>
      <h1>Interviews</h1>
      <h1>Tools I Use?</h1>
      <p>
        See <a href="/uses">my "uses" page</a>.
      </p>
      <Link to="/ai">
        <h1>AI Usage?</h1>
      </Link>
      <p>
        Everything here is written by me, <a href="/ai">not an AI</a>.
      </p>
    </div>
  );
}
