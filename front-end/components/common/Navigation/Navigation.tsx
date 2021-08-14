import React, { FC } from "react";
import { BottomNavigation } from "@material-ui/core";
import {
  Home,
  Favorite,
  Pages,
  NewReleases,
  ContactMail,
} from "@material-ui/icons";
import { StyleNavigation } from "./style";

export const Navigation: FC = () => {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <StyleNavigation label="Home" icon={<Home />} />
      <StyleNavigation label="Favorites" icon={<Favorite />} />
      <StyleNavigation label="Pages" icon={<Pages />} />
      <StyleNavigation label="Feature" icon={<NewReleases />} />
      <StyleNavigation label="Contact" icon={<ContactMail />} />
    </BottomNavigation>
  );
};
