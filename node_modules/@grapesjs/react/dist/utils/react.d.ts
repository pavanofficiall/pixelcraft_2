export declare const WrapDom: (el: HTMLElement | string) => () => import("react/jsx-runtime").JSX.Element;
export interface PortalContainerProps {
    children: React.ReactNode;
}
export type PortalContainerResult = React.FC<PortalContainerProps>;
export declare function portalContainer(el?: HTMLElement): PortalContainerResult;
