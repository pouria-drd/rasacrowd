interface AppLayoutProps {
    children?: React.ReactNode;
}

const AppLayout = (appLayoutProps: AppLayoutProps) => {
    return (
        <section className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl px-4 sm:px-0 mx-auto">
            {appLayoutProps.children}
        </section>
    );
};

export default AppLayout;
