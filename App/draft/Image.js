
// -----------------------------------------------------
// Note the attributes:
// -----------------------------------------------------
// style={{resizeMode: 'contain'}}
// source={require('./app/img/1.jpg')}
// source={{uri: '...'}}
// -----------------------------------------------------

// -----------------------------------------------------
//  Example 1
// -----------------------------------------------------

<Image style={{
    marginTop: 20,
    height: 300,
    width: "50%", 
    borderWidth: 10, 
    borderColor: 'gray',
    resizeMode: 'cover'
  }}
  source={require('./app/img/1.jpg')} />

// -----------------------------------------------------
//  Example 2
// -----------------------------------------------------

  {/* image */}
  <Image style={{
    marginTop: 20,
    height: 300,
    width: "100%", 
    borderWidth: 10, 
    borderColor: 'gray',
    resizeMode: 'contain'
  }}
  source={{uri: 'https://archive.org/download/web-host-server/web-host-server.jpg'}} />

// -----------------------------------------------------
//  Example 3
// -----------------------------------------------------
  {/* image */}

  <ImageBackground 
  source={{uri: 'https://archive.org/download/web-host-server/web-host-server.jpg'}} 
  style={{width: '100%', height: '100%'}}
  > 

      <Text style={styles.simpleText}>
        سلام دنیا!
      </Text>
  </ImageBackground>