interface menuListPros {
    path: string;
    fullPath?: string;
    name: string;
    meta: {
      title: string;
      sort?: number;
      icon?: string;
      menu?: boolean;
      outLink?: boolean;
      gloableKey?: string;
      keepAlive?: string;
      hasParent?: boolean;
      hiddenMenu?: boolean;
    },
    children?: menuListPros[];
  }

export type { menuListPros };
