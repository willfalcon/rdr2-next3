'use client';

import { MdOutlineSettings } from 'react-icons/md';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from './ui/dropdown-menu';

export default function Settings() {
  const hideCompleted = false;
  const autoSave = false;
  return (
    <DropdownMenu className="">
      <DropdownMenuTrigger id="settings-toggle">
        <MdOutlineSettings className="w-8 h-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="space-y-2 mr-4">
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        <div className="flex items-center space-x-2">
          <Switch
            id="hide-completed"
            checked={hideCompleted}
            onCheckedChange={value => {
              // dispatch(changeSetting({ setting: 'hideCompleted', value }));
            }}
          />
          <Label htmlFor="hide-completed">Hide Completed</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="auto-save"
            checked={autoSave}
            onCheckedChange={value => {
              // dispatch(changeSetting({ setting: 'autoSave', value }));
            }}
          />
          <Label htmlFor="auto-save">Auto Save</Label>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
