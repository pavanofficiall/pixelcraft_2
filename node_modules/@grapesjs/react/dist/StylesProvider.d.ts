import type { Sector } from 'grapesjs';
import React from 'react';
import { PortalContainerResult } from './utils/react';
export type StylesState = {
    /**
     * Array of visible sectors.
     */
    sectors: Sector[];
    /**
     * Default Styles container.
     */
    Container: PortalContainerResult;
};
export type StylesResultProps = StylesState;
export interface StylesProviderProps {
    children: (props: StylesResultProps) => React.JSX.Element;
}
declare const StylesProvider: React.NamedExoticComponent<StylesProviderProps>;
export default StylesProvider;
