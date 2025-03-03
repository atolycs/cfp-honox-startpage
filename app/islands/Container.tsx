import type { FC } from "hono/jsx";
type Props = {
  name: string;
  children: any;
};

export const LauncherContainer: FC<Props> = ({ name, children }) => {
  return (
    <div>
      <nav>~/{name}</nav>
      {children.map((post: any) => {
        return (
          <>
            <a href={post.props.href}>{post.props.children}</a>
            <br />
          </>
        );
      })}
    </div>
  );
};
