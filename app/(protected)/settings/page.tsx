import React from 'react';
import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';

const SettingsPage = async () => {
  const session = await auth();
  console.log(session);
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