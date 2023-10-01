import React from 'react';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { HeadingData } from '../Accessibility';

interface HeadingTreeProps {
  data: HeadingData;
}

const HeadingTree: React.FC<HeadingTreeProps> = ({ data }) => {
  return (
    <TreeView
      defaultCollapseIcon={<span>-</span>}
      defaultExpandIcon={<span>+</span>}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      <TreeItem nodeId={data.tagName} label={data.tagName}>
        <TreeItem
          nodeId={`${data.tagName}-text`}
          label={`${data.innerText}`}
        />
        {data.children.length > 0 &&
          data.children.map((child, index) => (
            <HeadingTree key={index} data={child} />
          ))}
      </TreeItem>
    </TreeView>
  );
};

export default HeadingTree;
