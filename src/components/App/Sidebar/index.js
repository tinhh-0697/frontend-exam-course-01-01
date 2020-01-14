import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Logo from "components/App/Logo";
import Navigation from "components/App/Navigation";
import {
  SidebarWrap
} from "./styles";
import { toggleSidebarAction } from "actions/sidebarActions";

function useOutsideSidebar(ref) {
  const dispatch = useDispatch();
  const onToggleSidebar = () => dispatch(toggleSidebarAction());

  const visible = useSelector(state => state.sidebar.visible);

  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      if (visible) onToggleSidebar();
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
}

function Sidebar() {
  const sidebarRef = useRef(null);
  const visible = useSelector(state => state.sidebar.visible);

  useOutsideSidebar(sidebarRef);

  return (
    <SidebarWrap ref={sidebarRef} visible={visible}>
      <Logo />
      <Navigation />
    </SidebarWrap>
  );
}

export default Sidebar;
