import type { Block } from 'grapesjs';
import React from 'react';
import { PortalContainerResult } from './utils/react';
export type BlocksState = {
    /**
     * Array of blocks.
     */
    blocks: Block[];
    /**
     * Enable drag for a block.
     */
    dragStart: (block: Block, ev?: Event) => void;
    /**
     * Disable drag.
     */
    dragStop: (cancel?: boolean) => void;
    /**
     * Default Block Manager container.
     */
    Container: PortalContainerResult;
    /**
     * Map of blocks by category.
     */
    mapCategoryBlocks: MapCategoryBlocks;
};
export type BlocksResultProps = BlocksState;
export interface BlocksProviderProps {
    children: (props: BlocksResultProps) => React.JSX.Element;
}
export interface BlocksEventProps {
    blocks: Block[];
    container: HTMLElement;
    dragStart: (block: Block, ev?: Event) => void;
    drag: (ev: Event) => void;
    dragStop: (cancel?: boolean) => void;
}
export type MapCategoryBlocks = Map<string, Block[]>;
declare const BlocksProvider: React.NamedExoticComponent<BlocksProviderProps>;
export default BlocksProvider;
