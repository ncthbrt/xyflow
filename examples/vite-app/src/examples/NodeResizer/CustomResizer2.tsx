import { memo, FC } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

import { NodeResizeControl } from '@reactflow/node-resizer';
import '@reactflow/node-resizer/dist/style.css';

const CustomNode: FC<NodeProps> = ({ id, data }) => {
  return (
    <>
      <NodeResizeControl color="red" position={Position.Top} />
      <NodeResizeControl color="red" position={Position.Bottom} />
      <Handle type="target" position={Position.Left} />
      <div style={{ padding: 10 }}>{data.label}</div>
      <Handle type="source" position={Position.Right} />
    </>
  );
};

export default memo(CustomNode);
