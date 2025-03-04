import type { FC } from "hono/jsx";
type Props = {
  name: string;
  children?: any;
  className?: string;
};

export const LauncherContainer: FC<Props> = ({ name, children, className }) => {
  if (children != null) {
    return (
      <ul class={"justify-stretch " + className}>
        <li class="text-left">~/{name}</li>
        {children.map((post: any) => {
          return (
            <>
              <li class="text-left ml-5">
                <a href={post.props.href}>{post.props.children}</a>
              </li>
            </>
          );
        })}
      </ul>
    );
  } else {
    return (
      <div class={className}>
        <ul>
          <li>~/{name}</li>
        </ul>
      </div>
    );
  }
};
