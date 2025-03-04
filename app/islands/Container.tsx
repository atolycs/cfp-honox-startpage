import type { FC } from "hono/jsx";
type Props = {
  name: string;
  children?: any;
  className?: string;
};

const header_css = `
@apply text-left
`;

export const LauncherContainer: FC<Props> = ({ name, children, className }) => {
  if (children != null) {
    return (
      <ul class={className}>
        <li class={header_css}>~/{name}</li>
        {children.map((post: any) => {
          return (
            <>
              <li class="text-left indent-3">
                <a href={post.props.href}>{post.props.children}</a>
              </li>
            </>
          );
        })}
      </ul>
    );
  } else {
    return (
      <ul class={className}>
        <li class={header_css}>~/{name}</li>
      </ul>
    );
  }
};
