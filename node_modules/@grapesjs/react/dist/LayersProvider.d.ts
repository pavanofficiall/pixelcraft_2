import type { Component } from 'grapesjs';
import React from 'react';
import { PortalContainerResult } from './utils/react';
export type LayersState = {
    /**
     * Root layer component.
     */
    root?: Component;
    /**
     * Default Layers Manager container.
     */
    Container: PortalContainerResult;
};
export type LayersResultProps = LayersState;
export interface LayersProviderProps {
    children: (props: LayersResultProps) => React.JSX.Element;
}
declare const LayersProvider: React.NamedExoticComponent<LayersProviderProps>;
export default LayersProvider;
