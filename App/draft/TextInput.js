
{/* ------------------------------ */}
{/*          TextInput              */}
{/* ------------------------------ */}

<View style={{
  borderWidth: 1,
  borderRadius: 10,
  marginVertical: 20,
  paddingHorizontal: 20,
  flexDirection: 'row',
  alignItems: 'center'
  }} >

  <TextInput
    style={{
      borderWidth: .5,
      fontSize: 24
    }}
    placeholder="اینجا بنویسید!"
    onChangeText={x => {}}
    defaultValue='محمد'
  />

  <Text style={
    [styles.simpleText, {
    marginVertical: 15
    }]
  }>  نام: </Text>

</View>