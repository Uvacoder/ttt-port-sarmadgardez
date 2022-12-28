import { SvgProps } from '.';

export const RssSvg: React.FC<SvgProps> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="currentColor"
    focusable={false}
    role={props.title ? 'img' : undefined}
    aria-hidden={!props.title ? 'true' : 'false'}
    className={props.className}
    width={props.size ?? 24}
    height={props.size ?? 24}
    style={props.style}
  >
    {props.title ? <title>{props.title}</title> : undefined}
    <path d="M26.258 64.949a8.78 8.78 0 0 0-8.78 8.784 8.782 8.782 0 1 0 17.564 0 8.78 8.78 0 0 0-8.784-8.784z" />
    <path d="M23.536 40.801c-.046 0-.09.006-.135.007v-.007h-3.464v.039a3.437 3.437 0 0 0-3.056 3.344h-.007v6.159h.041a3.43 3.43 0 0 0 3.021 3.002v.039H23.4v-.048c.045.001.09.007.135.007 12.772 0 23.173 10.321 23.311 23.061h-.033v3.464h.039a3.437 3.437 0 0 0 3.344 3.056v.007h6.158v-.041a3.43 3.43 0 0 0 3.002-3.021h.039v-3.464h-.006c-.137-19.657-16.166-35.604-35.853-35.604z" />
    <path d="M83.119 76.403C82.98 43.664 56.308 17.07 23.536 17.07c-.046 0-.09.006-.135.007v-.007h-3.464v.039a3.437 3.437 0 0 0-3.056 3.344h-.007v6.159h.041a3.429 3.429 0 0 0 3.021 3.002v.039H23.4v-.048c.045.001.09.007.135.007 25.857 0 46.902 20.967 47.041 46.792h-.035v3.464h.039a3.437 3.437 0 0 0 3.344 3.056v.007h6.159v-.041a3.43 3.43 0 0 0 3.002-3.021h.039v-3.464h-.005z" />
  </svg>
);