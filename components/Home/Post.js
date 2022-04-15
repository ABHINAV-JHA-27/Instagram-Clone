import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Line from '../Line';

const PostFOoterIcons = [
    {
        name: 'Like',
        imageUrl: 'https://img.icons8.com/fluency-systems-regular/344/like--v1.png',
        likedImageUrl: 'https://img.icons8.com/emoji/344/red-heart.png',
    },
    {
        name: 'Comment',
        imageUrl: 'https://img.icons8.com/fluency-systems-regular/344/comments--v1.png',
    },
    {
        name: 'Share',
        imageUrl: 'https://img.icons8.com/fluency-systems-regular/344/sent.png',
    },
    {
        name: 'Save',
        imageUrl: 'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
    },
]

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <Line />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginTop: 10, marginHorizontal: 15 }}>
                <PostFooter />
                <Likes post={post} />
                <Captions post={post} />
                <CommentSection post={post} />
                <Comments post={post} />
            </View>
        </View>
    );
}

const PostHeader = ({ post }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 5 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={{ uri: post.profilePicture }} style={styles.story} />
            <Text style={{ color: 'white', marginLeft: 5, fontWeight: '700' }}>{post.user}</Text>
        </View>

        <Text style={{ color: 'white', fontWeight: '900' }}>...</Text>
    </View>
)

const PostImage = ({ post }) => (
    <View style={{ width: '100%', height: 450 }}>
        <Image source={{ uri: post.image }} style={{ resizeMode: 'cover', height: '100%' }} />
    </View>
)

const PostFooter = () => (
    <View style={{ flexDirection: 'row' }}>
        <View style={styles.leftFooterIconContainer}>
            <Icons imageStyle={styles.footerIcon} imageUrl={PostFOoterIcons[0].imageUrl} />
            <Icons imageStyle={styles.footerIcon} imageUrl={PostFOoterIcons[1].imageUrl} />
            <Icons imageStyle={[styles.footerIcon, styles.shareIcon]} imageUrl={PostFOoterIcons[2].imageUrl} />
        </View>
        <View style={{ flex: '1', alignItems: 'flex-end' }}>
            <Icons imageStyle={styles.footerIcon} imageUrl={PostFOoterIcons[3].imageUrl} />
        </View>
    </View>
)

const Icons = ({ imageStyle, imageUrl }) => (
    <TouchableOpacity>
        <Image style={imageStyle} source={{ uri: imageUrl }} />
    </TouchableOpacity>
)

const Likes = ({ post }) => (
    <View style={{ marginTop: 4, flexDirection: 'row' }}>
        <Text style={{ color: 'white' }}>{post.likes.toLocaleString('en')} Likes</Text>
    </View>
)

const Captions = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        <Text style={{ color: 'white' }}>
            <Text style={{ fontWeight: '600' }}>{post.user}</Text>
            <Text> {post.captions}</Text>
        </Text>
    </View>
)

const CommentSection = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        {!!post.comments.length && (
            <Text style={{ color: 'gray' }} >
                View {post.comments.length > 1 ? 'all' : ' '} {post.comments.length} {post.comments.length > 1 ? 'Comments' : 'Comment'}
            </Text>
        )}
    </View>
)

const Comments = ({ post }) => (
    <>
        {post.comments.map((comment, index) => (
            <View>
                <Text style={{ color: 'white' }}>
                    <Text style={{ fontWeight: '600' }}>{comment.user}</Text> {comment.comment}
                </Text>
            </View>
        ))}
    </>
)


const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.5,
        borderColor: '#ff8501',
    },
    footerIcon: {
        width: 33,
        height: 33,
    },
    shareIcon: {
        transform: [{ rotate: '320deg' }],
        marginTop: -3,
    },
    leftFooterIconContainer: {
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between'
    }
})


export default Post;