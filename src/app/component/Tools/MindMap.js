'use client';
import ReactFlow, {
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { motion } from 'framer-motion';

const initialNodes = [
  {
    id: 'center',
    position: { x: 400, y: 300 },
    data: { label: 'React Trends' },
    style: {
      background: '#333',
      color: '#fff',
      padding: 10,
      borderRadius: 10,
    },
    draggable: false,
  },
  {
    id: 'redux',
    position: { x: 150, y: 100 },
    data: { label: 'Redux' },
    style: { background: '#60a5fa', color: '#fff', borderRadius: 8, padding: 10 },
    draggable: false,
  },
  {
    id: 'nextjs',
    position: { x: 650, y: 100 },
    data: { label: 'Next.js SSR' },
    style: { background: '#c084fc', color: '#fff', borderRadius: 8, padding: 10 },
    draggable: false,
  },
  {
    id: 'typescript',
    position: { x: 150, y: 500 },
    data: { label: 'TypeScript' },
    style: { background: '#facc15', color: '#000', borderRadius: 8, padding: 10 },
    draggable: false,
  },
  {
    id: 'ui-libs',
    position: { x: 650, y: 500 },
    data: { label: 'UI Component Libraries' },
    style: { background: '#86efac', color: '#000', borderRadius: 8, padding: 10 },
    draggable: false,
  },
];

const initialEdges = [
  { id: 'e1-2', source: 'center', target: 'redux', animated: true },
  { id: 'e1-3', source: 'center', target: 'nextjs', animated: true },
  { id: 'e1-4', source: 'center', target: 'typescript', animated: true },
  { id: 'e1-5', source: 'center', target: 'ui-libs', animated: true },
];

const StaticMindMap = () => {
  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  return (
    <ReactFlowProvider>
      <motion.div
        className="w-full h-screen"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          zoomOnScroll={false}
          panOnScroll={false}
          panOnDrag={false}
          nodesDraggable={false}
          zoomOnPinch={false}
        >
        </ReactFlow>
      </motion.div>
    </ReactFlowProvider>
  );
};

export default StaticMindMap;
