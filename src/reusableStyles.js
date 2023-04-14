const reusableStyles = {
    cardHover: {
        "&:hover": {
            backgroundColor: "#DAF7A6",
            cursor: "pointer"
        },
    },
    headerRoot: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        padding: 1.5,
        paddingTop: 2,
    },
    avatar: {
        backgroundColor: "rgb(255, 0, 0)",
    },
    fab: {
        marginTop: 8,
        position: "fixed",
        top: 20,
        right: 2,
    },
};
export default reusableStyles