import React, { useCallback, useState } from 'react';
import {
  Dialog,
  DialogContent,
  Box,
  Tabs,
  Tab,
  List,
  ListItem
} from '@mui/material';
import { HeadingData } from '../Accessibility';
import HeadingTree from './HeadingTree';
export interface PageStructureProps {
  isOpen?: boolean;
  links?: { href: string; text: string }[];
  headings?: HeadingData[];
  onClose?: () => void;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div hidden={value !== index}>{value === index && <>{children}</>}</div>
  );
}

const PageStructure: React.FC<PageStructureProps> = ({
  isOpen = false,
  links = [],
  headings = [],
  onClose = () => {}
}) => {
  const [value, setValue] = useState(0);

  const handleChange = useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    },
    []
  );

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogContent sx={{ minWidth: '500px', minHeight: '60vh' }}>
        <Box sx={{ width: '100%' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{ marginBottom: '10px' }}
          >
            <Tab label="Links" />
            <Tab label="Headings" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <List>
              {links.map((l) => (
                <ListItem key={l.href}>
                  <a href={l.href}>{l.text ? l.text : l.href}</a>
                </ListItem>
              ))}
            </List>
          </TabPanel>
          <TabPanel value={value} index={1}>
            {headings.map((heading, index) => (
              <HeadingTree key={index} data={heading} />
            ))}
          </TabPanel>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default PageStructure;
