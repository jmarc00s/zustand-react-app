import { Badge } from 'flowbite-react';
import { Profile } from 'pages/Users/models/profile';
import React, { ReactElement } from 'react';

type ProfileBadgeProps = {
  profile: Profile | undefined;
};

export const ProfileBadge = ({
  profile,
}: ProfileBadgeProps): ReactElement | null => {
  const pillColor: { [key: string]: string } = {
    Member: 'default',
    Admin: 'warning',
    SuperAdmin: 'danger',
  };

  if (!profile) return null;

  return (
    <Badge size="lg" color={pillColor[profile.name]}>
      {profile.name}
    </Badge>
  );
};
