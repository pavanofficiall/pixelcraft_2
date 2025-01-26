import type { Asset } from 'grapesjs';
import React from 'react';
import { PortalContainerResult } from './utils/react';
export type AssetsState = {
    /**
     * Array of assets.
     */
    assets: Asset[];
    /**
     * Asset types.
     */
    types: string[];
    /**
     * Select asset.
     */
    select: (asset: Asset, complete?: boolean) => void;
    /**
     * Close assets.
     */
    close: () => void;
    /**
     * Asset Manager container.
     */
    Container: PortalContainerResult;
};
export type AssetsResultProps = AssetsState & {
    /**
     * Indicates if the Asset Manager is open.
     */
    open: boolean;
};
export interface AssetsProviderProps {
    children: (props: AssetsResultProps) => React.JSX.Element;
}
export interface AssetsEventProps {
    open: boolean;
    assets: Asset[];
    types: string[];
    select: () => void;
    close: () => void;
    container: HTMLElement;
}
declare const AssetsProvider: React.NamedExoticComponent<AssetsProviderProps>;
export default AssetsProvider;
