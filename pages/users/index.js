import styles from "../../styles/Users.module.css";
import Link from "next/link";

export const getStaticProps = async () => {

    const res = await fetch("http://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: {
            users: data
        }
    };
};

const Users = ({ users }) => {
    return (<div>
        <h1>Users:</h1>
        {users.map(user => (
            <Link href={`/users/${user.id}`} key={user.id} className={styles.single}>
                <h3>{user.name}</h3>
            </Link>
        ))}
    </div>);
};

export default Users;