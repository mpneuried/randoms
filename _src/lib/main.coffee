# # Randoms

#
# ### Exports: *Function*
#
# Main Module
#

isNumeric = (n)->
	return not isNaN(parseFloat(n)) and isFinite(n)

randRange = ( lowVal=0, highVal=100 )->
	return Math.floor( Math.random()*(highVal-lowVal+1 ))+lowVal

randomString = ( string_length = 5, specialLevel = 0 )->
	if isNumeric( specialLevel )
		chars = "ABCDFGHJKLMNPQRSTVWXYZabcdfghjklmnpqrstvwxyz"
		chars += "0123456789" if specialLevel >= 1
		chars += "_-@:." if specialLevel >= 2
		chars += "!\"§$%&/()=?*'_:;,.-#+¬”#£ﬁ^\\˜·¯˙˚«∑€®†Ω¨⁄øπ•‘æœ@∆ºª©ƒ∂‚å–…∞µ~∫√ç≈¥" if specialLevel >= 3
	else
		chars = specialLevel
	
	randomstring = ""
	i = 0
	
	while i < string_length
		rnum = Math.floor(Math.random() * chars.length)
		randomstring += chars.substring(rnum, rnum + 1)
		i++
	return randomstring



randomobj = ( depth = 0, opt = {}, genFn )->
	if not genFn?
		genFn = randomdata
	tgrt={}
	_keyCount = opt.keyCount or randRange(1,( if opt.maxObjSize? then  opt.maxObjSize else 13 ))
	for i in [0..._keyCount]
		while tgrt[( _key = randomString( randRange(2,if opt.maxKeyLength? then  opt.maxKeyLength else 13),0 ) )]?
			1+1
		tgrt[ _key ] = genFn( depth, opt )
	return tgrt

randomdata = ( depth = 0, opt = {} )->
	if depth >= ( if opt.maxDepth? then opt.maxDepth else 2 )
		_i = randRange(1,2)
	else
		_i = randRange(1,4)
		
	_depth = depth + 1
	switch _i
		when 1
			# string
			return randomString( randRange(1,( if opt.maxStringLength? then opt.maxStringLength else 1024*5 )), ( if opt.maxComplex? then opt.maxComplex else 3 ) )
		when 2
			# number
			return randRange(1,1024*64 )
		when 3
			# array
			_arr = []
			return randomarray( randRange(0,13), ->return randomdata( _depth, opt ) )
			return _arr
		when 4
			# object
			return randomobj( _depth, opt )

randomarray = ( size=randRange(1,13), genFn )->
	_arr = []
	if not genFn?
		genFn = randomdata
	for i in [0...size]
		_arr.push genFn()
	return _arr

_ret = randomdata

_ret.number = randRange

_ret.string = randomString
_ret.string.lower = ( len )->
	return randomString( len, "abcdfghjklmnpqrstvwxyz" )
_ret.string.upper = ( len )->
	return randomString( len, "ABCDFGHJKLMNPQRSTVWXYZ" )
_ret.string.alphaNum = ( len )->
	return randomString( len, 1 )
_ret.string.any = ( len )->
	return randomString( len, 3 )

_ret.array = randomarray
_ret.array.number = ( size=randRange(1,13), lowVal=0, highVal=100 )->
	return randomarray( size, ->return _ret.number( lowVal, highVal ) )
	
_ret.array.string = ( size=randRange(1,13), len=randRange(1,13), specialLevel )->
	return randomarray( size, ->return _ret.string( len, specialLevel ) )
_ret.array.string.lower = ( size=randRange(1,13), len=randRange(1,13) )->
	return randomarray( size, ->return _ret.string.lower( len ) )
_ret.array.string.upper = ( size=randRange(1,13), len=randRange(1,13) )->
	return randomarray( size, ->return _ret.string.upper( len ) )
_ret.array.string.alphaNum = ( size=randRange(1,13), len=randRange(1,13) )->
	return randomarray( size, ->return _ret.string.alphaNum( len ) )
_ret.array.string.any = ( size=randRange(1,13), len=randRange(1,13) )->
	return randomarray( size, ->return _ret.string.any( len ) )
_ret.array.obj = ( size=randRange(1,13), lowVal=0, highVal=100 )->
	return randomarray( size, ->return _ret.number( lowVal, highVal ) )
_ret.array.pick = ( array )->
	if not array?.length
		throw new Error( "ENOTARRAY" )
	_idx = randRange( 0,array.length-1 )
	return array[ _idx ]
	
_ret.obj = ( keyCount=randRange(1,13), maxKeyLength=randRange(2,13), genFn )->
	return randomobj( 0, { keyCount: keyCount, maxKeyLength: maxKeyLength }, genFn )
_ret.obj.number = ( keyCount=randRange(1,13), lowVal=0, highVal=100, maxKeyLength )->
	return randomobj( 0, { keyCount: keyCount, maxKeyLength: maxKeyLength }, ->return _ret.number( lowVal, highVal ) )
_ret.obj.string = ( keyCount=randRange(1,13), len=randRange(1,13), specialLevel, maxKeyLength )->
	return randomobj( 0, { keyCount: keyCount, maxKeyLength: maxKeyLength }, ->return _ret.string( len, specialLevel ) )
_ret.obj.string.lower = ( keyCount=randRange(1,13), len=randRange(1,13), maxKeyLength )->
	return randomobj( 0, { keyCount: keyCount, maxKeyLength: maxKeyLength }, ->return _ret.string.lower( len ) )
_ret.obj.string.upper = ( keyCount=randRange(1,13), len=randRange(1,13), maxKeyLength )->
	return randomobj( 0, { keyCount: keyCount, maxKeyLength: maxKeyLength }, ->return _ret.string.upper( len ) )
_ret.obj.string.alphaNum = ( keyCount=randRange(1,13), len=randRange(1,13), maxKeyLength )->
	return randomobj( 0, { keyCount: keyCount, maxKeyLength: maxKeyLength }, ->return _ret.string.alphaNum( len ) )
_ret.obj.string.any = ( keyCount=randRange(1,13), len=randRange(1,13), maxKeyLength )->
	return randomobj( 0, { keyCount: keyCount, maxKeyLength: maxKeyLength }, ->return _ret.string.any( len ) )

module.exports = _ret
