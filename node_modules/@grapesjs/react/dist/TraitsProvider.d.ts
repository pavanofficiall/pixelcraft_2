import type { Trait } from 'grapesjs';
import React from 'react';
import { PortalContainerResult } from './utils/react';
export type TraitsState = {
    /**
     * Current selected traits.
     */
    traits: Trait[];
    /**
     * Default Trait Manager container.
     */
    Container: PortalContainerResult;
};
export type TraitsResultProps = TraitsState;
export interface TraitsProviderProps {
    children: (props: TraitsResultProps) => React.JSX.Element;
}
declare const TraitsProvider: React.NamedExoticComponent<TraitsProviderProps>;
export default TraitsProvider;
