import { View, Text, Image, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import Line from '../Line';
import validUrl from 'valid-url';

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1541562232579-512a21360020?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60';

const uploadPostSchema = yup.object().shape({
    imageUrl: yup.string().url().required('A URL is Required'),
    caption: yup.string().max(2200, 'Caption has reached the Limit'),
})

const FOrmikPostUploader = ({ navigation }) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMAGE);
    return (
        <Formik initialValues={{ caption: '', imageUrl: '' }} validationSchema={uploadPostSchema} onSubmit={value => {
            console.log(value)
            console.log("Post Submitted !!")
            navigation.goBack();
        }} validateOnMount={true}>
            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
                <>
                    <View style={{ margin: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Image source={{ uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACEHOLDER_IMAGE }} style={{ width: 100, height: 100 }} />
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <TextInput
                                style={{ fontSize: 20, color: 'white' }}
                                placeholder='Write a caption...'
                                placeholderTextColor='gray'
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </View>
                    </View>
                    <Line />
                    <TextInput
                        onChange={e => setThumbnailUrl(e.nativeEvent.text)}
                        style={{ fontSize: 17, color: 'white' }}
                        placeholder='Enter image URL'
                        placeholderTextColor='gray'
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    />
                    {errors.imageUrl && (
                        <Text style={{ fontSize: 10, color: 'red' }}>
                            {errors.imageUrl}
                        </Text>
                    )}
                    <Button onPress={handleSubmit} title='Share' disabled={!!isValid} />
                </>
            )
            }
        </Formik >
    );
}

export default FOrmikPostUploader;