import React, { useEffect, useRef } from "react";
import StudioEditor from '@grapesjs/studio-sdk/react';
import '@grapesjs/studio-sdk/style';

const GrapeJSEditor = () => {

// ... inside your React component
return (
  <div className="h-screen flex flex-col">
    <StudioEditor
      className="flex-1"
      options={{
        licenseKey: '485395a83d144f27923d343278c74551df06d19a159b47ae97baf2772c36657d',
        project: {
          type: 'web',
          // TODO: replace with a unique id for your projects. e.g. an uuid
          id: 'project-12345' // Replace with a unique project ID
        },
        identity: {
          // TODO: replace with a unique id for your end users. e.g. an uuid
          id: 'user-67890' // Replace with a unique end-user ID
        },
        assets: {
          storageType: 'cloud'
        },
        storage: {
          type: 'cloud',
          autosaveChanges: 100,
          autosaveIntervalMs: 10000
        }
      }}
    />
  </div>
);
};

export default GrapeJSEditor;