# Page Structure Guide (with/ without sidebar)


## Layout 1 — Default (No Sidebar)

For public-facing pages like the homepage.

```
┌──────────────────────────────────────┐
│              header                  │
├──────────────────────────────────────┤
│                                      │
│           page content               │
│                                      │
└──────────────────────────────────────┘
```

### HTML

```html
<body class="homepage">

    <!-- Header -->
    <header class="uk-flex uk-flex-middle">
        <nav class="container-custom">
            <a href="#">
                <div class="nav-logo">
                    <img src="/images/logos/qx-logo.png">
                </div>
            </a>
            <div class="nav-links">
                <a class="nav-link" href="#">
                    <svg><!-- icon --></svg>
                    <span>Home</span>
                </a>
                <a class="nav-link" href="#">
                    <svg><!-- icon --></svg>
                    <span>Send Invite</span>
                </a>
                <a class="nav-link" href="#signup-modal" uk-toggle>
                    <svg><!-- icon --></svg>
                    <span>API</span>
                </a>
                <a class="nav-link sign-in" href="#signin-modal" uk-toggle>
                    <svg><!-- icon --></svg>
                    <span>Sign in</span>
                </a>
            </div>
        </nav>
    </header>

    <!-- Page Content -->
    <section class="YOUR-SECTION-CLASS">
        <div class="container-custom">
            <!-- content here -->
        </div>
    </section>

</body>
```

### Rules

- `<body>` gets a page-specific class e.g. `class="homepage"`
- Header nav uses `container-custom` — centered, max-width constrained
- No `layout-wrap`, no sidebar, no hamburger button
- Each page section gets its own semantic class

---

## Layout 2 — Dashboard (With Sidebar)

For authenticated/app pages that need navigation.

```
┌──────────────────────────────────────────────┐
│                 layout-wrap                  │
│ ┌────────────┬─────────────────────────────┐ │
│ │            │          body-wrap          │ │
│ │            │ ┌─────────────────────────┐ │ │
│ │            │ │         header          │ │ │
│ │  sidebar   │ ├─────────────────────────┤ │ │
│ │            │ │                         │ │ │
│ │ full height│ │      main-content       │ │ │
│ │            │ │                         │ │ │
│ └────────────┴─└─────────────────────────┘─┘ │
└──────────────────────────────────────────────┘
```

### HTML

```html
<body>

    <div class="layout-wrap">

        <!-- ─── SIDEBAR ─────────────────────────────── -->
        <aside class="sidebar open" id="sidebar">
            <nav class="sidebar-nav">

                <!-- Brand -->
                <div class="sidebar-brand">
                    <a href="#">
                        <div class="nav-logo">
                            <img src="/images/logos/qx-logo.png" width="40">
                        </div>
                    </a>
                    <h4>QSI OpenAPI <span>Playground</span></h4>
                </div>

                <!-- Nav section -->
                <div class="s-section">
                    <span class="s-label">Core</span>
                    <a class="s-item" href="#">Documentation</a>
                    <a class="s-item active" href="#">API Keys</a>
                </div>

                <!-- Nav section with accordion -->
                <div class="s-section">
                    <span class="s-label">Endpoints</span>
                    <div class="s-item" id="ep-toggle">
                        API Endpoint
                        <span class="s-chevron" id="ep-chevron">▾</span>
                    </div>
                    <div class="sub-menu" id="sub-menu">
                        <div class="s-item sub">REST</div>
                        <div class="s-item sub">WebSocket</div>
                        <div class="s-item sub">GraphQL</div>
                    </div>
                </div>

                <!-- Nav section -->
                <div class="s-section">
                    <span class="s-label">System</span>
                    <a class="s-item" href="#">Settings</a>
                </div>

            </nav>
        </aside>

        <!-- ─── BODY WRAP ────────────────────────────── -->
        <div class="body-wrap">

            <!-- Header -->
            <header class="uk-flex uk-flex-middle">
                <nav class="uk-width-expand uk-padding-small">
                    <div class="uk-flex uk-flex-vertical-center">

                        <!-- Hamburger — always before logo -->
                        <button class="hamburger uk-margin-right" id="sidebar-toggle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"/>
                                <line x1="3" y1="6" x2="21" y2="6"/>
                                <line x1="3" y1="18" x2="21" y2="18"/>
                            </svg>
                        </button>

                        <a href="#">
                            <div class="nav-logo">
                                <img src="/images/logos/qx-logo.png">
                            </div>
                        </a>
                    </div>

                    <div class="nav-links">
                        <a class="nav-link" href="#">
                            <svg><!-- icon --></svg>
                            <span>Home</span>
                        </a>
                        <a class="nav-link" href="#">
                            <svg><!-- icon --></svg>
                            <span>Send Invite</span>
                        </a>
                        <a class="nav-link" href="#">
                            <svg><!-- icon --></svg>
                            <span>API</span>
                        </a>
                        <a class="nav-link sign-in" href="#">
                            <svg><!-- icon --></svg>
                            <span>Sign in</span>
                        </a>
                    </div>
                </nav>
            </header>

            <!-- Main Content -->
            <section class="main-content" uk-height-viewport="offset-top: true;">
                <div class="container-custom">
                    <!-- content here -->
                </div>
            </section>

        </div>
        <!-- end .body-wrap -->

    </div>
    <!-- end .layout-wrap -->

</body>
```

### Rules

- `<body>` has no extra class — the layout is defined by `layout-wrap`
- Sidebar starts open via `class="sidebar open"` on the `<aside>`
- Header nav uses `uk-width-expand uk-padding-small` — stretches full width of `body-wrap`
- Hamburger button always comes before the logo inside the header
- QX logo from header will remove `display: none` once the SCSS detected that the header is inside the `layout-wrapper` 
- Main content section always gets `main-content` class alongside its own class
- Scripts go at the bottom of `<body>`, before `</body>`

---
