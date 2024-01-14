import React from 'react';
import { signOut } from '@/auth';
import { Button } from '@/components/ui/button';

const SettingsPage = async () => {
  return (
    <div>
      <form 
      action={async() => {
        "use server";
        await signOut();
      }}>
        <Button variant={"destructive"} type="submit">Sign out</Button>
      </form>
    </div>
  );
};

export default SettingsPage