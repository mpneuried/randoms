should = require( "should" )

randoms = require( "../." )

MULTIPLERUNS=50

describe "----- randoms TESTS -----", ->

	describe "Numbers", ->

		it "single number", ->
			randoms.number().should.be.instanceof(Number).and.within(0,100)
			return
		
		it "low number", ->
			randoms.number(0,1).should.be.instanceof(Number).and.within(0,1)
			return
		
		it "multiple runs", ->
			for idx in [0..MULTIPLERUNS]
				randoms.number(0,666).should.be.instanceof(Number).and.within(0,666)
			return

		return
	
	describe "String", ->
		
		it "single string", ->
			randoms.string()
				.should.be.instanceof(String)
				.and.have.length(5)
				.and.match( /^[A-z]+$/ )
			return
		
		it "single long", ->
			randoms.string(100)
				.should.be.instanceof(String)
				.and.match( /^[A-z]+$/ )
				.and.have.length(100)
			return
		
		it "single special", ->
			randoms.string(300, 2)
				.should.be.instanceof(String)
				.and.match( /^[A-z0-9\:\.\-_@]+$/ )
				.and.have.length(300)
			return
		
		it "single special custom", ->
			randoms.string(300, "0123465789ABCDEF")
				.should.be.instanceof(String)
				.and.match( /^[0-9A-F]+$/ )
				.and.have.length(300)
			return
		
		it "lowercase", ->
			randoms.string.lower(300)
				.should.be.instanceof(String)
				.and.match( /^[a-z]+$/ )
				.and.have.length(300)
			return
		
		it "uppercase", ->
			randoms.string.upper(300)
				.should.be.instanceof(String)
				.and.match( /^[A-Z]+$/ )
				.and.have.length(300)
			return
		
		it "alphaNum", ->
			randoms.string.alphaNum(300)
				.should.be.instanceof(String)
				.and.match( /^[A-z0-9]+$/ )
				.and.have.length(300)
			return
		
		it "any", ->
			randoms.string.any(300)
				.should.be.instanceof(String)
				.and.have.length(300)
			return
		return
		
	describe "Array", ->
		
		it "random array", ->
			randoms.array()
				.should.be.instanceof(Array)
				.and.have.property("length")
					.with.within(1,13)
			return
		
		it "random array length", ->
			randoms.array(20)
				.should.be.instanceof(Array)
				.and.have.length(20)
			return
		
		it "random array gen", ->
			randoms.array(20, ->return "Foo")
				.should.be.instanceof(Array)
				.and.matchEach('Foo')
				.and.have.length(20)
			return
		
		it "random array.string", ->
			randoms.array.string(20)
				.should.be.instanceof(Array)
				.and.matchEach (_v)->
					_v.
						should.be.instanceof(String)
						.and.match( /^[A-z]+$/ )
						.and.have.property("length")
						.with.within(1,13)
					return
				.and.have.length(20)
			return
			
		it "random array.string len", ->
			randoms.array.string(20, 5)
				.should.be.instanceof(Array)
				.and.matchEach (_v)->
					_v.
						should.be.instanceof(String)
						.and.match( /^[A-z]+$/ )
						.and.length(5)
					return
				.and.have.length(20)
			return
			
		it "random array.string len special", ->
			randoms.array.string(20, 5, 2)
				.should.be.instanceof(Array)
				.and.matchEach (_v)->
					_v.
						should.be.instanceof(String)
						.and.match( /^[A-z0-9\:\.\-_@]+$/ )
						.and.length(5)
					return
				.and.have.length(20)
			return
		
		it "random array.string.lower", ->
			randoms.array.string.lower(20, 5)
				.should.be.instanceof(Array)
				.and.matchEach (_v)->
					_v.
						should.be.instanceof(String)
						.and.match( /^[a-z]+$/ )
						.and.length(5)
					return
				.and.have.length(20)
			return
		
		it "random array.string.upper", ->
			randoms.array.string.upper(20, 5)
				.should.be.instanceof(Array)
				.and.matchEach (_v)->
					_v.
						should.be.instanceof(String)
						.and.match( /^[A-Z]+$/ )
						.and.length(5)
					return
				.and.have.length(20)
			return
		
		it "random array.string.alphaNum", ->
			randoms.array.string.alphaNum(20, 50)
				.should.be.instanceof(Array)
				.and.matchEach (_v)->
					_v.
						should.be.instanceof(String)
						.and.match( /^[A-z0-9]+$/ )
						.and.length(50)
					return
				.and.have.length(20)
			return
		
		it "random array.string.any", ->
			randoms.array.string.alphaNum(20, 50)
				.should.be.instanceof(Array)
				.and.matchEach (_v)->
					_v.
						should.be.instanceof(String)
						.and.length(50)
					return
				.and.have.length(20)
			return
			
	describe "Object", ->
		
		it "random obj", ->
			Object.keys(
				randoms.obj()
					.should.be.instanceof(Object)
			).should.have.property("length")
				.with.within(1,13)
			return
		
		it "random obj length", ->
			_r = randoms.obj(20)
			_r.should.be.instanceof(Object)
			Object.keys( _r ).should.length(20)
			return
		
		it "random obj length with short keys", ->
			_r = randoms.obj(30, 2)
			_r.should.be.instanceof(Object)
			Object.keys( _r ).should.length(30)
			return
		
		it "random obj gen", ->
			_r = randoms.obj(5, 10, ->return "Foo")
			_r.should.be.instanceof(Object)
				.and.matchEach('Foo')
			Object.keys( _r ).should.length(5)
			return
		
		it "random obj.number", ->
			_r = randoms.obj.number(20)
			_r.should.be.instanceof(Object)
				.and.matchEach (_v)->
					_v.
						should.be.instanceof(Number)
						.and.within(0,100)
					return
			Object.keys( _r )
				.should.matchEach (_k)->
					_k.should.be.instanceof(String)
						.and.have.property("length")
						.with.within(2,13)
					return
				.and.length( 20 )
			return
		
		it "random obj.number limits", ->
			_r = randoms.obj.number(20, 5, 10, 100 )
			_r.should.be.instanceof(Object)
				.and.matchEach (_v)->
					_v.
						should.be.instanceof(Number)
						.and.within(5,10)
					return
			Object.keys( _r )
				.should.matchEach (_k)->
					_k.should.be.instanceof(String)
						.and.have.property("length")
						.with.within(2,100)
					return
				.and.length( 20 )
			return
		
		it "random obj.string", ->
			_r = randoms.obj.string(20)
			_r.should.be.instanceof(Object)
				.and.matchEach (_v)->
					_v.
						should.be.instanceof(String)
						.and.match( /^[A-z]+$/ )
						.and.have.property("length")
						.with.within(1,13)
					return
			Object.keys( _r ).should.length( 20 )
			return
		
		it "random obj.string len", ->
			_r = randoms.obj.string(20, 5)
			_r.should.be.instanceof(Object)
				.and.matchEach (_v)->
					_v.
						should.be.instanceof(String)
						.and.match( /^[A-z]+$/ )
						.and.length(5)
					return
			Object.keys( _r ).should.length( 20 )
			return
			
		it "random obj.string len special", ->
			_r = randoms.obj.string(20, 5, 2)
			_r.should.be.instanceof(Object)
				.and.matchEach (_v)->
					_v.
						should.be.instanceof(String)
						.and.match( /^[A-z0-9\:\.\-_@]+$/ )
						.and.length(5)
					return
			Object.keys( _r ).should.length( 20 )
			return
		
		it "random obj.string.lower", ->
			_r = randoms.obj.string.lower(20, 5)
			_r.should.be.instanceof(Object)
				.and.matchEach (_v)->
					_v.
						should.be.instanceof(String)
						.and.match( /^[a-z]+$/ )
						.and.length(5)
					return
			Object.keys( _r ).should.length( 20 )
			return
		
		it "random obj.string.upper", ->
			_r = randoms.obj.string.upper(20, 5)
			_r.should.be.instanceof(Object)
				.and.matchEach (_v)->
					_v.
						should.be.instanceof(String)
						.and.match( /^[A-Z]+$/ )
						.and.length(5)
					return
			Object.keys( _r ).should.length( 20 )
			return
		
		it "random obj.string.alphaNum", ->
			_r = randoms.obj.string.alphaNum(20, 50)
			_r.should.be.instanceof(Object)
				.and.matchEach (_v)->
					_v.
						should.be.instanceof(String)
						.and.match( /^[A-z0-9]+$/ )
						.and.length(50)
					return
			Object.keys( _r ).should.length( 20 )
			return
		
		it "random obj.string.any", ->
			_r = randoms.obj.string.alphaNum(20, 50)
			_r.should.be.instanceof(Object)
				.and.matchEach (_v)->
					_v.
						should.be.instanceof(String)
						.and.length(50)
					return
			Object.keys( _r ).should.length( 20 )
			return
		return
